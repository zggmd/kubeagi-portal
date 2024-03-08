import {addFixedClassName, chatMaxWidth, createGlobalStyle, createStyles} from "../utils/customTheme";

const useStyles = createStyles(({ token, cx, css, prefixCls, iconPrefixCls }) => {
  const prefix = 'yunti-chat'
  const fixCx = addFixedClassName(cx)(prefix)
  return {
    references: fixCx('references', css`
      margin-bottom: 12px;
      font-size: 11px;
    ` ),
    referencesTxt: fixCx('referencesTxt', css`
      margin-top: 12px;
      margin-bottom: 12px;
      font-size: 11px;
      color: ${token.colorTextDescription};
    `),
    referencesList: fixCx('referencesList', css`
      opacity: 0.8;
      filter: brightness(0.8);
    `),
  };
});

export default useStyles;


export const useRefStyles = createStyles(({ token, cx, css, prefixCls, iconPrefixCls }) => {
  const prefix = 'yunti-chat'
  const fixCx = addFixedClassName(cx)(prefix)
  return {
    popContent: fixCx('popContent', css`
      width: 300px;
    ` ),
    divider: fixCx('divider', css`
      margin: 8px 0;
    `),
    relLine: fixCx('relLine', css`
      margin-top: 12px;
    `),
    q: fixCx('q', css`
      display: inline-flex;
      margin: 12px 0;
      font-size: 13px;
    `),
  };
});
