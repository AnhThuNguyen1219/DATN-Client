import React, {useState, useEffect}from "react";
import Banner from '../layout/banner'
import ListBooks from '../layout/list_book'
import axios from "axios";


const Home = () => {
  const [newest, setNewest] = useState({books:[]});
  const [name90, setName90] = useState("");
  const [name91, setName91] = useState("");
  const [name92, setName92] = useState("");
  const [name93, setName93] = useState("");
  const [category90, setCategory90] = useState({books:[]});
  const [category91, setCategory91] = useState({books:[]});
  const [category92, setCategory92] = useState({books:[]});
  const [category93, setCategory93] = useState({books:[]});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const newest = await axios(
        'http://localhost:9000/api/newest',
      );
      const cate90 = await axios(
        'http://localhost:9000/api/category/90',
      );
      const cate91 = await axios(
        'http://localhost:9000/api/category/91',
      );
      const cate92 = await axios(
        'http://localhost:9000/api/category/92',
      );
      const cate93 = await axios(
        'http://localhost:9000/api/category/93',
      );
      setNewest(newest.data);
      setName90(cate90.data.category_name);
      setName91(cate91.data.category_name);
      setName92(cate92.data.category_name);
      setName93(cate93.data.category_name);
      setCategory90(cate90.data);
      setCategory91(cate91.data);
      setCategory92(cate92.data);
      setCategory93(cate93.data);
      setIsLoading(false);
    };
 
    fetchData();
  }, []);

  return (
    <>
      <Banner />
      {isLoading ? (
        <div class="d-flex justify-content-center">
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      ) : (
        <>
        <ListBooks header="Mới nhất" books={newest}/>
        <ListBooks header={name90} category_id="90" books={category90}/>
        <ListBooks header={name91} category_id="91" books={category91}/>
        <ListBooks header={name92} category_id="92" books={category92}/>
        <ListBooks header={name93} category_id="93" books={category93}/>
        {console.log(newest)}
        {console.log(category90)}
        </>
      )}
      
    </>
  );
};
export default Home;
