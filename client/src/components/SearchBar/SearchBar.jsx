import styled from "styled-components";
import search2 from "../../assets/search2.png";
import { Text } from "../Core/Text";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

const SearchIcon = styled.img`
  width: 30px;
  height: auto;
`;

const Search = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  text-decoration: none;
  border: none;
  outline: none;
  background-color: #f9f6f2;
  width: 300px;
  height: 30px;
`;
const Select = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #92acfa12;
  border: none;
  border-radius: 20px;
  color: #000000c7;
  font-weight: 600;
  font-size: 14px;
  height: 40px;
`;

const ErrorMsg = styled(Text)`
  color: red;
  font-size: 16px;
  margin-left: 50px;
`;
const regions = ["EUNE", "EUW"];

export const SearchBar = ({ error }) => {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [region, setRegion] = useState(regions[0]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) {
      setInputError(true);
      return;
    }

    navigate("/" + (region === "EUNE" ? "eun1" : "euw1") + "/" + input);
    setInput("");
  };

  return (
    <div style={{ gridArea: "search" }}>
      <Container>
        <Search onSubmit={handleSubmit}>
          <SearchIcon src={search2} />
          <Text>
            <Input
              type="text"
              placeholder="Search summoner..."
              value={input}
              onChange={(e) => {
                setInputError(false);
                setInput(e.target.value);
              }}
            />
          </Text>
          <Text>
            <Select onChange={(e) => setRegion(e.target.value)} value={region}>
              {regions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </Select>
          </Text>
        </Search>
      </Container>
      {inputError && <ErrorMsg>Invalid summoner name</ErrorMsg>}
      {error && <ErrorMsg>Summoner does not exist</ErrorMsg>}
    </div>
  );
};
