import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Welcome } from 'components/Welcome';
import { cleanMemory } from 'store/userSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanMemory());
  }, [dispatch]);

    return <Welcome/>;
}

export default Home;