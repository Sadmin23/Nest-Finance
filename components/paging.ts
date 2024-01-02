const [lf, setLF] = useState([0,0]);

type PageRange = {
    firstEntry: number;
    lastEntry: number;
  };
  
  const calculatePageRange = (
    totalEntries: number,
    pageSize: number,
    pageNumber: number
  ): PageRange => {
    if (totalEntries === 0) {
      return { firstEntry: 0, lastEntry: 0 };
    } else {
      const firstEntry = (pageNumber - 1) * pageSize + 1;
      const lastEntry = Math.min(pageNumber * pageSize, totalEntries);
      return { firstEntry, lastEntry };
    }
  };

  const lastIndex = currentPage * rowsnum;
  const firstIndex = lastIndex - rowsnum;

  useEffect(() => {
    const { firstEntry, lastEntry } = calculatePageRange(size, rowsnum, currentPage);
    setLF([firstEntry, lastEntry]);
  }, [size, rowsnum, currentPage]);

  const handleNextPage = () => {
    if (lastIndex < size) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      }
  };

  const IncreaseRow = () => {
    if (rowsnum === 5) {
      setRowsnum(10);
    } else if (rowsnum === 10) {
      setRowsnum(20);
    }
  };

  const DecreaseRow = () => {
    if (rowsnum === 20) {
      setRowsnum(10);
    } else if (rowsnum === 10) {
      setRowsnum(5);
    }
  };

  const changePage = (n: number) => {
      if (n*rowsnum <= size + rowsnum)
          setCurrentPage(n)
  }

  const handleFirst = () => {
      setCurrentPage(1);
    };
    
  const handleLast = () => {
    setCurrentPage(Math.ceil(size/rowsnum));
  };

  let x, y

  x = lf[0]
  y = lf[1] 