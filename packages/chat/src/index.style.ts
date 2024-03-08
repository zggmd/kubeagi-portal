import {addFixedClassName, createGlobalStyle, createStyles} from "./utils/customTheme";
import {chatMaxWidth} from "./utils/customTheme";

const inputAreaHeight = '150px'
const width = '@width: calc(100% - 48px);'
export const GlobalStyles = createGlobalStyle`
  #root {
    min-height: 100% !important;
  }
  .yunti-chat-inputArea > div {
    position: unset !important;
    background: ${(p) => p.theme.colorBgLayout};
  }
  .yunti-chat-inputArea > section > div:last-child > div:last-child {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 16px;
    div:first-child {
      display: flex;
      align-items: center;
    }
  }
`

const useStyles = createStyles(({ token, cx, css }) => {
  const prefix = 'yunti-chat'
  const fixCx = addFixedClassName(cx)(prefix)
  return {
    chatComponentT: css`
      background: red;
    `,
    chatComponent: fixCx('chatComponent', css`
      display: flex;
      flex-grow: 2;
      align-items: flex-end;
      height: 100%;
    ` ),
    chatColumn: fixCx('chatColumn', css`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: calc(100vh - 100px);
      padding: 24px 0;
      background: #f5f8fc;
      border: 1px solid ${token.colorBorderSecondary};
      border-left-width: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    `),
    // chatList
    chatList: fixCx('chatList', css`
      display: flex;
      flex-grow: 2;
      align-items: flex-end;
      height: 100%;
    ` ),
    // chatList
    stop: fixCx('stop', css`
      display: block;
      margin: 0 auto;
    ` ),
    inputArea: fixCx('inputArea', css`
      display: flex;
      width: ${width};
      max-width: ${chatMaxWidth};
      height: ${inputAreaHeight};
    ` ),
    // chatColumn done
    chatDebug: fixCx('chatDebug', css`
      height: calc(100vh - 278px);
    `),
    gpts: fixCx('gpts', css`
      height: calc(100vh);
    `),
    chatDark: fixCx('chatDark', css`
      background: #191919;
      border-color: #353535;
    `),
    chatSpin: fixCx('chatSpin', css`
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: calc(100vh - 350px);
    `),
  };
});

export default useStyles;

