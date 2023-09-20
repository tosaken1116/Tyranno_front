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
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="self-center">
      <select
        value={countryCode}
        className="w-32 py-1 rounded-sm text-gold-dark focus:outline-0"
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
        className="focus:outline-0 py-[2.4px] text-gold-dark"
        placeholder="電話番号を入力"
      />
    </div>
  );
};

export default TelNumInput;
