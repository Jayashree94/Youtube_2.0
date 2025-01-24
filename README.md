const [searchQuery, setSearchQuery] = useState("");


<input
            className="w-1/2 rounded-l-full  border border-gray-600 p-2"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            
          ></input>

          ---------------------------------


const [suggestions, setSuggestions] = useState([]);


useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);



  -------------------------------------------------


  const [showSuggestions, setShowSuggestions] = useState(false);

  onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}