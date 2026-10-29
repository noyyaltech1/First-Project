import "../Form.css";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
} from "react";


const degree = ["BCA", "BBA", "MBA", "MCA", "BCom"];

const states = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh"
];

const districts = [
  "Coimbatore",
  "Chennai",
  "Madurai",
  "Salem"
];

const SearchInput=({ placeholder, value, onChange }) =>{
  return (
    <input
      type="search"
      className="size"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoFocus
    />
  );
}
const DropdownButton = ({ label, selected, onClick }) => {
  return (
    <button type="button"
      className="btn"
      onClick={onClick}>
      {selected || label}▼
    </button>
  );
};


function FormValidation() {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: [],
    radio: "",
    address: "",

    selected: "",
    state: "",
    district: "",
    isOpen: false,
    stateOpen: false,
    districtOpen: false,
    search: "",
    stateSearch: "",
    districtSearch: ""
  });

  const [file, setFile] = useState(null);

  
  const degreeRef = useRef(null);
  const stateRef = useRef(null);
  const districtRef = useRef(null);

  console.log("Form component rendered");

  
  const filteredDegree = useMemo(() => {
    console.log("Filtering degrees");

    return degree.filter((d) =>
      d.toLowerCase().includes(form.search.toLowerCase())
    );
  }, [form.search]);

  const filteredStates = useMemo(() => {
    console.log("Filtering states");

    return states.filter((s) =>
      s.toLowerCase().includes(form.stateSearch.toLowerCase())
    );
  }, [form.stateSearch]);

  const filteredDistricts = useMemo(() => {
    console.log("Filtering districts");
    
    return districts.filter((d) =>
      d.toLowerCase().includes(form.districtSearch.toLowerCase())
    );
    
  }, [form.districtSearch]);

  
  useEffect(() => {
    console.log("Outside-click listener attached");

    const handleOutsideClick = (event) => {
      if (
        degreeRef.current &&
        !degreeRef.current.contains(event.target)
      ) {
        setForm((prev) => {
          console.log(prev);
          return{
        ...prev,
        isOpen: false
          }
      });
      }

      if (
        stateRef.current &&
        !stateRef.current.contains(event.target)
      ) {
       setForm((prev) => ({
        ...prev,
        stateOpen: false
      }));
      }

      if (
        districtRef.current &&
        !districtRef.current.contains(event.target)
      ) {
       setForm((prev) => ({
        ...prev,
        districtOpen: false
      }));
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      
    };
  }, []);

 
  const handle = (e) => {
    console.log({e, target: e.target});
    
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  
  const handlerole = (e) => {
    const { value, checked } = e.target;

    setForm((previous) => ({
      ...previous,
      role: checked
        ? [...previous.role, value]
        : previous.role.filter((role) => role !== value)
    }));
  };

  
  const handleSelect = (d) => {
  console.log("Degree selected:", d);
  

 setForm((prev) => ({
    ...prev,
    selected: d,
    search: "",
    isOpen: false
  }));
};

  const handleSelectState = useCallback((s) => {
    console.log("State selected:", s);

    setForm((prev) => ({
    ...prev,
    state: s,
    stateSearch: "",
    stateOpen: false
  }));
  }, []);

  const handleSelectDistrict = useCallback((d) => {
    console.log("District selected:", d);

    setForm((prev) => ({
    ...prev,
    district: d,
    districtSearch: "",
    districtOpen: false
  }));
  }, []);

 
  const validatePhone = (phone = "") => {
    return /^[6-9]\d{9}$/.test(phone);
  };

  
  const handlereset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      role: [],
      radio: "",
      address: "",
      selected: "",
      state: "",
      district: "",
      isOpen: false,
      stateOpen: false,
      districtOpen: false,
      search: "",
      stateSearch: "",
      districtSearch: ""
    });
    setFile(null);
  };
  
  const handlesubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(form.phone)) {
      alert("Enter a valid mobile number");
      return;
    }

    if (form.role.length === 0) {
      alert("Please select at least one role");
      return;
    }


    alert("Form submitted successfully");
    handlereset();
  };

  
  return (
    <div id="container" className="container">
      <h1>Welcome</h1>
      <p>Fill the form correctly</p>

      <form id="myform" onSubmit={handlesubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Enter your name"
            required
          />
        </label>

        <br />

        <label>
          Email ID:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handle}
            placeholder="Enter your email"
            required
          />
        </label>

        <br />

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="Enter your phone number"
            required
          />
        </label>

        <br />

        <label>
          Choose a File:
          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />
        </label>

        <br />

        
        <div className="drop" ref={degreeRef}>
          <label>Select a degree: 
          <DropdownButton
              label="Select a Degree"
              selected={form.selected}
              onClick={() => {
                setForm((prev) => ({
                  ...prev,
                  isOpen: !prev.isOpen,
                  stateOpen: false,
                  districtOpen: false
                }));
              }}
          
          />
          </label>
          {form.isOpen && (
            <div className="dropdown-content">
              <SearchInput
                  placeholder="Search Degree..."
                  value={form.search}
                  onChange={(value) =>
                    setForm((prev) => ({
                      ...prev,
                      search: value
                    }))
                  }
                />

              {filteredDegree.length > 0 ? (
                filteredDegree.map((d) => (
                  <div
                    className="field"
                    key={d}
                    onClick={() => handleSelect(d)}
                  >
                    {d}
                  </div>
                ))
              ) : (
                <p>No degrees found</p>
              )}
            </div>
          )}
        </div>

        <br />

       
        <div className="drop" ref={stateRef}>
          
          <label>Select a State
          <DropdownButton
            label="Select a State"
            selected={form.state}
            onClick={() => {
              setForm((prev) => ({
                ...prev,
                stateOpen: !prev.stateOpen,
                isOpen: false,
                districtOpen: false
              }));
            }}
          />
</label>
          {form.stateOpen && (
            <div className="dropdown-content">
              <SearchInput
                  placeholder="Search State..."
                  value={form.stateSearch}
                  onChange={(value) =>
                    setForm((prev) => ({
                      ...prev,
                      stateSearch: value
                    }))
                  }
                />

              {filteredStates.length > 0 ? (
                filteredStates.map((s) => (
                  <div
                    className="field"
                    key={s}
                    onClick={() => handleSelectState(s)}
                  >
                    {s}
                  </div>
                ))
              ) : (
                <p>No states found</p>
              )}
            </div>
          )}
        </div>

        <br />

        
        <div className="drop" ref={districtRef}>
          <label>Select a District:
          <DropdownButton
            label="Select a District"
            selected={form.district}
            onClick={() => {
              setForm((prev) => ({
                ...prev,
                districtOpen: !prev.districtOpen,
                isOpen: false,
                stateOpen: false
              }));
            }}
          />
           </label>
          {form.districtOpen && (
            <div className="dropdown-content">
              <SearchInput
                  placeholder="Search District..."
                  value={form.districtSearch}
                  onChange={(value) =>
                    setForm((prev) => ({
                      ...prev,
                      districtSearch: value
                    }))
                  }
                />

              {filteredDistricts.length > 0 ? (
                filteredDistricts.map((d) => (
                  <div
                    className="field"
                    key={d}
                    onClick={() => handleSelectDistrict(d)}
                  >
                    {d}
                  </div>
                ))
              ) : (
                <p>No districts found</p>
              )}
            </div>
          )}
        </div>

        <br />

        <label>
          Select the Role:
          <input
            type="checkbox"
            value="Digital marketing"
            checked={form.role.includes("Digital marketing")}
            onChange={handlerole}
          />
          Digital Marketing

          <input
            type="checkbox"
            value="Developer"
            checked={form.role.includes("Developer")}
            onChange={handlerole}
          />
          Developer
        </label>

        <br />

        <label>
          Enter an address:
          <textarea
            className="area"
            name="address"
            rows="2"
            cols="25"
            value={form.address}
            onChange={handle}
          />
        </label>

        <br />
        <br />

        <button id="submit" type="submit">
          Submit
        </button>

        <br />
        <br />

        <button
          id="reset"
          type="button"
          onClick={handlereset}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
