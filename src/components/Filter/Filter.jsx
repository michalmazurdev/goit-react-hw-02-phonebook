// import css from './Filter.module.css';

export const Filter = ({ onChange }) => (
  <label>
    Find contacts by name
    <input
      onChange={onChange}
      type="text"
      name="name"
      pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
    />
  </label>
);
