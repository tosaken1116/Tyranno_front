import type { ChangeEvent, SetStateAction } from 'react';

type Props = {
  value: { countryCode: string; phoneNumber: string };
  setState: React.Dispatch<
    SetStateAction<{ countryCode: string; phoneNumber: string }>
  >;
};

const TelNumInput: React.FC<Props> = ({
  value: { countryCode, phoneNumber },
  setState,
}) => {
  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    console.log(countryCode + phoneNumber);
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      <select
        value={countryCode}
        className="w-32 rounded-sm text-gold-main focus:outline-0"
        name="countryCode"
        onChange={onChange}
      >
        <option value="+81">+81 (日本)</option>
        <option value="+1">+1 (アメリカ)</option>
      </select>
      <input
        type="tel"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
        className=" focus:outline-0"
        placeholder="電話番号を入力"
      />
    </div>
  );
};

export default TelNumInput;
