import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../libs/constants/colors";
import { uploadImage } from "../../../libs/api";
import ImgWrapper from "../../common/ImgWrapper";
import { Article, Keys } from "../../../types/interface";

interface LeftScreenProps {
  handleDataChange: (key: Exclude<Keys, "tags">, value: string) => void;
  articleData: Article;
}
interface StyledProps {
  limit: boolean;
}
const isFileList = (files: any): files is FileList => {
  return (files as FileList).length > 0;
};

function LeftScreen(props: LeftScreenProps) {
  const { handleDataChange, articleData } = props;

  const MAX_NUM = 150;
  const { summary, thumbnail } = articleData;

  const [previewImage, setPreviewImage] = useState<string | undefined>(
    thumbnail
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = e.currentTarget.value;
    const length: number = value.length;

    if (length > MAX_NUM) {
      const rest: string = value.slice(summary.length, MAX_NUM);
      const newSummary: string = summary + rest;
      handleDataChange("summary", newSummary);
    } else {
      handleDataChange("summary", value);
    }
  };

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (isFileList(e.target.files)) {
      const imageFile: File = e.target.files[0];
      const imageUrl = await uploadImage(imageFile);

      if (imageUrl) {
        setPreviewImage(imageUrl);
        handleDataChange("thumbnail", imageUrl);
      }
    }
  };

  return (
    <StyledRoot>
      <h3>포스트 미리보기</h3>
      <input type="file" onChange={handleImageChange} />
      {previewImage && (
        <ImgWrapper ratio="56%">
          <img src={previewImage} alt="thumbnail" />
        </ImgWrapper>
      )}
      <textarea
        placeholder="당신의 포스트를 짧게 소개해보세요."
        value={summary}
        onChange={handleChange}
      />
      <StyledCharacterCounter limit={summary.length === 150}>
        {summary.length || "0"} /150
      </StyledCharacterCounter>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  width: 100%;
  & > h3 {
    margin-bottom: 8px;
    font-size: 21px;
    font-weight: bold;
  }
  & > input {
    margin-bottom: 32px;
    display: block;
  }
  & > textarea {
    width: 100%;
    height: 118px;
    resize: none;
    padding: 12px 16px;
  }
`;

const StyledCharacterCounter = styled.div<StyledProps>`
  text-align: right;
  font-size: 12px;
  margin-top: 4px;
  color: ${({ limit }) => (limit ? "red" : colors.dateGray)};
`;

export default LeftScreen;
