import {addFixedClassName, createGlobalStyle, createStyles} from "../utils/customTheme";

export const GlobalStyles = createGlobalStyle`
  .anticon {
    font-size: 13px !important;
  }
  .ant-upload-list {
    display: flex;
    .ant-upload-list-item-container {
      .ant-upload-list-item {
        height: 20px;
        margin: 0 4px 0 0;
        border: 1px dashed ${(p) => p.theme.colorBorderSecondary};
        .ant-upload-list-item-thumbnail {
          height: 14px;
          line-height: 14px;
          .anticon {
            font-size: 13px;
          }
        }
      }
    }
  }
`

const useStyles = createStyles(({ token, cx, css }) => {
  const prefix = 'yunti-chat'
  const fixCx = addFixedClassName(cx)(prefix)
  return {
    sendAction: fixCx('sendAction', css`
      padding: 0 32px;
    ` ),
    keyBindings: fixCx('keyBindings', css`
      font-size: 12px;
      color: ${token.colorTextDescription};
    `),
    uploadListInline: fixCx('uploadListInline', css`
      display: flex;
      align-items: center;
    `),
    test: css`
      background: red;
      .ssz {
        background: yellow;
      }
    `,
  };
});

export default useStyles;

