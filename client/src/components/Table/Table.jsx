import { TailSpin } from 'react-loader-spinner';

export const Table = ({ tab, filterMethod }) => {
  const fakeData = '';

  const filteredTab = tab.filter(item => item === filterMethod);
  return (
    <div>
      Table
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
