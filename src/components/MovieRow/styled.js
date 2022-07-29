import styled from "styled-components";

export const RowArea = styled.div`
  margin-bottom:30px;
`

export const Title = styled.h1`
  color:#fff;
  margin-left:30px;
`
export const ListRow = styled.div`
  display:flex;
`
export const ItemList = styled.div`
  cursor:pointer;
  img{
    width:150px;
    transform:scalex(0.9);
    transition:all ease .2s;
  }
  img:hover{
    transform:scalex(1);
  }

`