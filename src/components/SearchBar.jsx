import styled from "styled-components";
import { Text } from "./Text Styles/Text";
import search2 from "../assets/search2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchCont = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  grid-area: search;
`;

const SearchIcon = styled.img`
  width: 30px;
  height: auto;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const InputSearch = styled.input`
  text-decoration: none;
  border: none;
  outline: none;
  background-color: #f9f6f2;
  width: 300px;
  height: 30px;
`;
const SearchSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #92acfa12;
  border: none;
  border-radius: 20px;
  color: #000000c7;
  font-weight: 600;
  font-size: 14px;
`;
const regions = ["EUNE", "EUW"];

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [region, setRegion] = useState(regions[0]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const regionWithLastE = region.endsWith("E") ? region.slice(0, -1) : region;
    navigate("/" + regionWithLastE.toLowerCase() + "1" + "/" + input);
    setInput("");
  }

  return (
    <SearchCont>
      <SearchForm>
        <SearchIcon src={search2} />
        <Text>
          <InputSearch
            type="text"
            placeholder="Search summoner..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
          />
        </Text>
        <Text>
          <SearchSelect
            onChange={(e) => setRegion(e.target.value)}
            value={region}
          >
            {regions.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </SearchSelect>
        </Text>
      </SearchForm>
    </SearchCont>
  );
};
