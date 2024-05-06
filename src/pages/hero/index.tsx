import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AdjustPoint } from "../../components";
import { useGetHeroProfile, usePatchHeroProfile } from "../../data-access";
import { PointEnum, Profile } from "../../types";
import {
  AdjustPointWrapperStyled,
  ContainerStyled,
  RightWrapperStyled,
  SubmitWrapperStyled,
} from "./styles";

export const Hero: FC = () => {
  const { heroId } = useParams();
  const {
    data: profile,
    isFetched,
    isFetching,
  } = useGetHeroProfile({ id: heroId || "" });
  const { mutate: saveProfile, isPending: isUpdating } = usePatchHeroProfile(
    heroId || ""
  );

  // 暫存的資料，用於計算剩餘點數與儲存
  const [tempData, setTempData] = useState<Profile>({
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  });

  const { pointsLeft, isUpdated } = useMemo(() => {
    if (!profile || !tempData) return { pointsLeft: 0, isUpdated: false };

    // 資料庫總數值
    const amount = profile?.str + profile?.int + profile?.agi + profile?.luk;

    // 已分配總數值
    const tempDataAmount =
      tempData?.str + tempData?.int + tempData?.agi + tempData?.luk;

    // 檢查是否有更動
    const isUpdated =
      profile.str !== tempData.str ||
      profile.int !== tempData.int ||
      profile.agi !== tempData.agi ||
      profile.luk !== tempData.luk;

    // 計算尚未分配的數值
    return { pointsLeft: amount - tempDataAmount, isUpdated };
  }, [tempData, profile]);

  const handlePointChange = useCallback((type: PointEnum, value: number) => {
    setTempData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  }, []);

  const handleSubmit = useCallback(() => {
    saveProfile(tempData, {
      onSuccess: () => {
        toast.success("儲存成功");
      },
      onError: () => {
        toast.error("儲存失敗");
      },
    });
  }, [saveProfile, tempData]);

  useEffect(() => {
    if (isFetched && profile) {
      setTempData(profile);
    }
  }, [isFetched, profile]);

  return (
    <ContainerStyled>
      <AdjustPointWrapperStyled>
        <AdjustPoint
          value={tempData.str}
          onChange={(val: number) => handlePointChange(PointEnum.STR, val)}
          label={PointEnum.STR}
          minusDisabled={tempData.str <= 0}
          addDisabled={pointsLeft <= 0}
        />
        <AdjustPoint
          value={tempData.int}
          onChange={(val: number) => handlePointChange(PointEnum.INT, val)}
          label={PointEnum.INT}
          minusDisabled={tempData.int <= 0}
          addDisabled={pointsLeft <= 0}
        />
        <AdjustPoint
          value={tempData.agi}
          onChange={(val: number) => handlePointChange(PointEnum.AGI, val)}
          label={PointEnum.AGI}
          minusDisabled={tempData.agi <= 0}
          addDisabled={pointsLeft <= 0}
        />
        <AdjustPoint
          value={tempData.luk}
          onChange={(val: number) => handlePointChange(PointEnum.LUK, val)}
          label={PointEnum.LUK}
          minusDisabled={tempData.luk <= 0}
          addDisabled={pointsLeft <= 0}
        />
      </AdjustPointWrapperStyled>
      <RightWrapperStyled>
        <SubmitWrapperStyled>
          <Typography>剩餘點數: {pointsLeft}</Typography>
          <Button
            onClick={handleSubmit}
            disabled={pointsLeft > 0 || !isUpdated || isUpdating || isFetching}
            variant="contained"
          >
            儲存
          </Button>
        </SubmitWrapperStyled>
      </RightWrapperStyled>
    </ContainerStyled>
  );
};
