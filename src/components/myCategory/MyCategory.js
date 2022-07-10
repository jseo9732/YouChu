import * as style from './MyCategoryStyle';
import { categoryArray } from 'lib/modules';

export default function MyCategory({ categoryList, setCategoryList }) {
  const onClick = (e) => {
    const isIncludes = categoryList.find(
      (el) => el === parseInt(e.target.value),
    );
    if (isIncludes) {
      // 삭제
      setCategoryList(
        categoryList.filter((el) => el !== parseInt(e.target.value)),
      );
    } else {
      // 추가
      setCategoryList((preList) => [...preList, parseInt(e.target.value)]);
    }
  };

  return (
    <>
      <style.SubTitle>유튜버 관심 카테고리 선택 (1개 이상)</style.SubTitle>
      <style.CategoryContainer>
        {categoryArray.map((category) => (
          <style.CategoryBox
            key={category.id}
            value={category.id}
            onClick={onClick}
            active={categoryList.find((el) => el === category.id)}
          >
            {category.value}
          </style.CategoryBox>
        ))}
      </style.CategoryContainer>
    </>
  );
}
