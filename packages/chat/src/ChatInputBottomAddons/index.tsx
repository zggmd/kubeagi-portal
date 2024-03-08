/**
 * Licensed Materials - Property of k8s.com.cn
 * (C) Copyright 2023 KubeAGI. All Rights Reserved.
 */

/**
 * retry
 * @author zggmd
 * @date 2024-02-01
 */
import { PaperClipOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import { ArrowBigUp, CornerDownLeft } from 'lucide-react';
import * as React from 'react';
import { useCallback } from 'react';
import useStyles, {GlobalStyles} from './index.style'
import I18N from '../utils/kiwiI18N';

interface IChatInputBottomAddons {
  appData: any;
  onSend: (input: string) => void;
  input: string;
  onFileListChange: (fileList: UploadFile[]) => void;
  fileList: UploadFile[];
  loading: boolean;
}

const ChatInputBottomAddons: React.FC<IChatInputBottomAddons> = props => {
  const { appData, onSend, onFileListChange, input, fileList, loading } = props;
  const {styles} = useStyles();
  const handleChange: UploadProps['onChange'] = useCallback(
    info => {
      onFileListChange?.(info.fileList);
    },
    [onFileListChange]
  );
  return (
    <Flex align="center" className={styles.sendAction} gap="large" justify="end">
      <GlobalStyles />
      <Upload
        accept=".pdf"
        className={styles.uploadListInline}
        fileList={fileList}
        listType="picture"
        multiple
        onChange={handleChange}
      >
        <Button icon={<PaperClipOutlined style={{ fontSize: 17 }} />} type="text"></Button>
      </Upload>
      <span className={styles.keyBindings}>
        <CornerDownLeft size={12} />
        <span>{I18N.Chat.faSong2}</span>
        <ArrowBigUp size={12} />
        <CornerDownLeft size={12} />
        <span>{I18N.Chat.huanXing}</span>
      </span>
      <Tooltip title={appData?.llm ? '' : I18N.Chat.zanWeiGuanLianMo}>
        <Button disabled={!appData?.llm || loading} onClick={onSend.bind('', input)} type="primary">
          {I18N.Chat.faSong}
        </Button>
      </Tooltip>
    </Flex>
  );
};
export default ChatInputBottomAddons;
