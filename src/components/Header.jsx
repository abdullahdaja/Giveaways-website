 import styles from './Header.module.css';  
 import logo from './13966579.png'
const Header = ({ setSortName,setPlatform }) => {
  const handleSelectChange = (event) => {
    setPlatform(event.target.value);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img className={styles.logo1} src={logo}></img>
        <h1 className={styles.LogoText} ><span>G</span>alactic<span>Give</span>aways </h1>
      </nav>
      <div className={styles.buttons} >
         
        <button  onClick={() => setSortName('date')}> Date</button>
        <button onClick={() => setSortName('popularity')}> Popularity</button>
        <button onClick={() => setSortName('value')}> Value</button>
      </div>

      <select className={styles.select} onChange={handleSelectChange}>
          <option value="pc">PC</option>
          <option value="ps4">Ps</option>
          <option value="xbox-series-xs">xbox</option>
        </select>
    </header>
  );
};

export default Header;
