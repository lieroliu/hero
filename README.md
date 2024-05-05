
# Heros
- [github-page](https://lieroliu.github.io/hero/)
- 使用 react starter 建立的新專案，加入 Typescript，使用 Router V6 運行 SPA 單頁式網站。
- 使用 Axios 與 React-Query 做 API 資料管理；Material UI 快速建構各式 Component，React-Toastify 作為訊息通知中心

## 指令
- **yarn start** 啟動專案
- **yarn deploy** 發布 github page

## 目錄

- [工具/技術](#工具/技術)
- [概念](#概念)
- [專案結構](#專案結構)
- [Naming Convention](#naming-convention)

## 工具/技術

- [TypeScript](https://www.typescriptlang.org/docs/)
- [React 18](https://beta.reactjs.org/)
- [React-Query v4](https://tanstack.com/query/v4/)
- [Axios](https://axios-http.com/docs/intro)
- [Jest](https://jestjs.io/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)
- [react-hooks-testing-library](https://react-hooks-testing-library.com/)
- [Material UI](https://mui.com/zh/material-ui/getting-started/overview/)
- [Styled-Components](https://styled-components.com/docs)
- [React-Toastify](https://www.npmjs.com/package/react-toastify)

## 專案結構
- **data-access** 和後端互動的功能 (custom react-query hooks)
- **providers** 客製化的各式 Provider
- **pages** 頁面
- **interface** 共用的 TypeScript interface/type/enum
- **utils** 工具型程式/元件/各種程式邏輯

## Naming Convention
- **data-access**
  - **GET**
    - Hook `useGet{{MODEL}}` ex. `useGetUser`
    - Fetch function `get{{MODEL}}` ex. `getUser`
  - **POST**
    - Hook `usePost{{MODEL}}` ex. `usePost`
    - Fetch function `post{{MODEL}}` ex. `postUser`
  - **PATCH**
    - Hook `usePatch{{MODEL}}` ex. `usePatchUser`
    - Fetch function `patch{{MODEL}}` ex. `patchUser`
  - **DELETE**
    - Hook `useDelete{{MODEL}}` ex. `useDeleteUser`
    - Fetch function `delete{{MODEL}}` ex. `deleteUser`
- **providers**
  - `{{LIBRARY/INTENTION}}Provider` ex. `QueryClientProvider`
- **pages**
  - 頁面名稱
- **types**
  - `{{MODEL}}.interface` ex. `user.interface`
- **React Hooks** prefix with `use`
