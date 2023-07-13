import { UsersIcon } from '@heroicons/react/20/solid';

const PeopleAmount = ({ people, setPeople }) => {
  return (
    <div>
      <label
        htmlFor="people"
        className="block font-serif text-sm font-light leading-6 text-gray-600"
      >
        Number of People
      </label>

      <div className="relative mt-2 flex flex-grow items-stretch focus-within:z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>

        <input
          type="number"
          name="people"
          id="people"
          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 font-serif text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
          placeholder="0"
          aria-describedby="number-of-people"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PeopleAmount;
