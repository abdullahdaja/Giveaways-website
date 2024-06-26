import  { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../src/components/Data.module.css'; // Correct the path according to your project structure
import Card from '../src/components/Card';
import Header from './components/Header.jsx';

const App = () => {
  const [giveaways, setGiveaways] = useState([]);
  const [error, setError] = useState(null);
  const [sortName, setSortName] = useState('date');
  const [platform, setPlatform] = useState('pc');
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://gamerpower.p.rapidapi.com/api/giveaways?platform=${platform}&sort-by=${sortName}`, {
          headers: {
            'x-rapidapi-key': '1fa64c1ab8msh1a6a9de7186c903p1b52a8jsna579a812dd6d',
            'x-rapidapi-host': 'gamerpower.p.rapidapi.com'
          }
        });
        setGiveaways(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [sortName,platform]);

 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header setSortName={setSortName}  setPlatform={setPlatform}   />
      <div className={styles.container}>
         <div className={styles.giveawayList}>
          {giveaways.map(giveaway => (
            <Card
              key={giveaway.id}
              title={giveaway.title}
              description={giveaway.description}
              image={giveaway.image}
              platform={giveaway.platforms}
              end_date={giveaway.end_date}
              type={giveaway.type}
              url={giveaway.open_giveaway_url}
            />
          ))}
        </div>
       </div>
    </>
  );
};

export default App;
