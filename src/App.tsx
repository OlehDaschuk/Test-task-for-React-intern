import React from 'react';
import { Dropdown } from './components/Dropdawn';

type Country = {
  id: number;
  name: string;
};
const countries: Country[] = [
  { name: 'Norway', id: 1 },
  { name: 'Finland', id: 2 },
  { name: 'Estonia', id: 3 },
  { name: 'Denmark', id: 4 },
];

type User = {
  id: number;
  name: string;
  surname: string;
  image: string;
};
const users: User[] = [
  {
    name: 'Alex',
    surname: 'Thurner',
    id: 1,
    image: 'https://xsgames.co/randomusers/assets/avatars/male/51.jpg',
  },
  {
    name: 'Elvis',
    surname: 'Dolsen',
    id: 2,
    image: 'https://xsgames.co/randomusers/assets/avatars/male/42.jpg',
  },
  {
    name: 'Susann',
    surname: 'Hark',
    id: 3,
    image: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
  },
  {
    name: 'Veronica',
    surname: 'Briar',
    id: 4,
    image: 'https://xsgame',
  },
];

function App() {
  return (
    <div className="grid grid-cols-2 p-4">
      <div>
        <p>Countreis dropdawn:</p>

        <Dropdown
          items={countries}
          btnContent={(selectedCountry) => (
            <div className="flex">
              {countries.find((country) => country.id === selectedCountry.id)?.name}
            </div>
          )}
          renderOptionAs={(country: Country) => <ReanderCountry country={country} />}
        />
      </div>

      <div>
        <p>Users dropdawn:</p>

        <Dropdown
          items={users}
          btnContent={(selectedUser) => (
            <div className="flex items-center gap-3 h-8">
              <img
                className="rounded-full h-full"
                src={users.find((user) => user.id === selectedUser.id)?.image}
                loading="lazy"
                alt=""
              />
              <span>{selectedUser.name[0] + selectedUser.surname[0]}</span>
            </div>
          )}
          renderOptionAs={(user) => <ReanderUser user={user} />}
        />
      </div>
    </div>
  );
}

const ReanderCountry: React.FC<{ country: Country }> = ({ country }) => {
  return <>{country.name}</>;
};

const ReanderUser: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex justify-start items-center gap-3 h-8 p-1">
      <img className="max-w-none max-h-[100%] rounded-full" src={user.image} alt="" />
      <p>{`${user.name} ${user.surname}`}</p>
    </div>
  );
};

export default App;
