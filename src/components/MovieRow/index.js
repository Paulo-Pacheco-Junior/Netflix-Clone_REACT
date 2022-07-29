import { Title, RowArea, ListRow, ItemList } from './styled';

export default ({ title, items }) => {
  console.log(items.results.length);
  let imageRow = 'https://image.tmdb.org/t/p/w300/';
  return (
    <RowArea>
      <Title>{title}</Title>
      <ListRow>
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <ItemList>
              <img key={key} src={`${imageRow}${item.poster_path}`} alt={item.title} />
            </ItemList>
          ))}
      </ListRow>
    </RowArea>
  );
}