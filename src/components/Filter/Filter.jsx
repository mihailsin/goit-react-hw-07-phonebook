import { nanoid } from 'nanoid';
import { setString } from '../../redux/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import { Label, Input, Wrapper } from '../ContactForm/ContactForm.styled';
const Filter = () => {
  const filterInputId = nanoid(7);
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Label htmlFor={filterInputId}>Filter</Label>
      <Input
        onChange={e => dispatch(setString(e.target.value))}
        id={filterInputId}
        value={filterValue}
        type="text"
        name="filter"
        required
      />
    </Wrapper>
  );
};

export default Filter;
