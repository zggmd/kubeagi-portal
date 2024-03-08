import {addFixedClassName, chatMaxWidth, createGlobalStyle, createStyles} from "../utils/customTheme";

const useStyles = createStyles(({ token, cx, css, prefixCls, iconPrefixCls }) => {
  const prefix = 'yunti-chat'
  const fixCx = addFixedClassName(cx)(prefix)
  return {
    promptStart: fixCx('promptStart', css`
      justify-self: flex-end;
      max-width: ${chatMaxWidth};
      margin-left: 40px;
      font-size: 14px;
    ` ),
    Col: fixCx('Col', css`
      margin-bottom: 8px;
      margin-left: 8px;
    `),
    tag: fixCx('tag', css`
      cursor: pointer;
      width: 100%;
      height: 100%;
      padding: 8px;
      white-space: break-spaces;
    `),
  };
});

export default useStyles;

