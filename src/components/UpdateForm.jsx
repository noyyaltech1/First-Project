
import "../Form.css";

import React, {
  useState,
  useEffect,
  useMemo,
  useRef
} from "react";


// All dropdown data in one object
const lists = {
  selected: ["BCA", "BBA", "MBA", "MCA", "BCom"],

  state: [
    "Tamil Nadu",
    "Kerala",
    "Karnataka",
    "Andhra Pradesh"
  ],

  district: [
    "Coimbatore",
    "Chennai",
    "Madurai",
    "Salem"
  ]
};


// Reusable Dropdown Button
const DropdownButton = ({
  name,
  label,
  selected,
  onClick
}) => {
  return (
    <button
      type="button"
      className="btn"
      name={name}
      onClick={onClick}
    >
      {selected || label} ▼
    </button>
  );
};


// Reusable Dropdown Component
const Dropdown = ({
  name,
  label,
  selected,
  isOpen,
  search,
  filterData,
  openList,
  setSearch,
  handleSelect
}) => {

  return (
    <div className="drop">

      <label>
        Select {label}:

        <DropdownButton
          name={name}
          label={`Select ${label}`}
          selected={selected}
          onClick={openList}
        />

      </label>


      {isOpen && (

        <div className="dropdown-content">

          <input
            type="search"
            className="size"
            placeholder={`Search ${label}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />


          {filterData.length > 0 ? (

            filterData.map((item) => (

              <div
                className="field"
                key={item}
                onClick={() => handleSelect(name, item)}
              >
                {String(item)}
              </div>

            ))

          ) : (

            <p>No {label} found</p>

          )}

        </div>

      )}

    </div>
  );
};


function UpdateForm() {

  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: [],
    radio: "",
    address: "",

    selected: "",
    state: "",
    district: ""
  });


  
  const [file, setFile] = useState(null);


 
  const [isOpen, setIsOpen] = useState(null);
  const [search, setSearch] = useState("");


  // Common dropdown ref
  const dropdownRef = useRef(null);


  console.log("Form component rendered");


  // filtering function
  const filterData = useMemo(() => {

    if (!isOpen) return [];

    console.log("Filtering:", isOpen);

    return lists[isOpen].filter((item) =>
      String(item)
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [isOpen, search]);


  // Open  Close dropdown
  const openList = (e) => {

    const { name } = e.currentTarget;

    setIsOpen((prev) =>
      prev === name ? null : name
    );

    setSearch("");

  };


  // Outside click handler
  useEffect(() => {

    console.log("Outside-click listener attached");

    const handleOutsideClick = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {

        setIsOpen(null);
        setSearch("");

      }

    };


    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

    };

  }, []);


  
  const handle = (e) => {

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


  //  dropdown selection
  const handleSelect = (name, value) => {

    console.log(`${name} selected:`, value);

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setIsOpen(null);
    setSearch("");

  };


  
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
      district: ""
    });

    setFile(null);

    setIsOpen(null);
    setSearch("");

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


        
        <div ref={dropdownRef}>

          {Object.entries(lists).map(([name, options]) => (

            

              <Dropdown
              key={name}
                name={name}

                label={
                  name === "selected"
                    ? "Degree"
                    : name.charAt(0).toUpperCase() + name.slice(1)
                }

                selected={form[name]}

                isOpen={isOpen === name}

                search={search}

                filterData={filterData}

                openList={openList}

                setSearch={setSearch}

                handleSelect={handleSelect}
              />

            

            

          ))}

        </div>


        {/* Role Checkbox */}
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


        {/* Address */}
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


        {/* Submit */}
        <button id="submit" type="submit">
          Submit
        </button>

        <br />
        <br />


        {/* Reset */}
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

export default UpdateForm;
