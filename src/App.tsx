import { useEffect } from 'react'
import { useDataDispatch } from './hooks/useDataDispatch';
import { useDataSelector } from './hooks/useDataSelector';

import Loader from './components/Loader';
import Modal from './components/Modal';
import Table from './components/Table';
import Toolbar from './components/Toolbar';

import {
  addToFavorites,
  closeModal,
  openModal,
  removeFromFavorites,
  setSearch,
  setShowFavorites
} from './store/slices/dataSlice';

import { Container } from './styles/table.styles';
import { fetchData } from './store/sagas/dataSaga';

function App() {
  const dispatch = useDataDispatch();

  const {
    data,
    favoritesData,
    isLoading,
    modalData,
    search,
    showFavorites,
    showModal,
  } = useDataSelector((state) => state.datas);

  const filterByFavorite = () => favoritesData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filterByName = () => data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToFavorites = (id: number) => {
    dispatch(addToFavorites(id));
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  }

  const handleOpenModal = (id: number) => {
    dispatch(openModal(id));
  }

  const handleRemoveFromFavorites = (id: number) => {
    dispatch(removeFromFavorites(id));
  }

  const handleSearchChange = (value: string) => {
    dispatch(setSearch(value));
  }

  const handleShowFavorites = (value: boolean) => {
    dispatch(setShowFavorites(value));
  }

  const isFavorite = (id: number) => {
    return favoritesData.some(item => item.id === id);
  }

  const displayData = showFavorites ? filterByFavorite() : filterByName();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  return (
    <Container>
      <Toolbar
        search={search}
        setSearch={handleSearchChange}
        showFavorites={showFavorites}
        setShowFavorites={handleShowFavorites}
      />

      {showModal && modalData && (
        <Modal closeModal={handleCloseModal} data={modalData} />
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <Table
          addToFavorites={handleAddToFavorites}
          filter={displayData}
          isFavorite={isFavorite}
          openModal={handleOpenModal}
          removeFromFavorites={handleRemoveFromFavorites}
        />
      )}
    </Container>
  )
}

export default App
