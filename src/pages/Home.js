const Home = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {

      const fetchData = async () => {
        const apiUrl = 'http://localhost:8000/api/';
  

      axios.get(apiUrl)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error('Error:', error);
        });
      }
      
    }, []);
  
    return (
      <div>
        <h1>My Data from Django API</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
}
 
export default Home;