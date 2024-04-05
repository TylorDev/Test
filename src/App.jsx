/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";

function App() {
  return (
    <div>
      <div className="Sidemenu">
        <ul>
          <Categoria></Categoria>
          <Categoria></Categoria>
          <Categoria></Categoria>
          <Categoria></Categoria>
        </ul>
      </div>

      <div className="App">
        <Serie></Serie>
        <Serie></Serie>
        <Serie></Serie>
        <Serie></Serie>
      </div>

      <Grid></Grid>
    </div>
  );
}

export default App;
function Serie() {
  const divRef = useRef(null);

  const handleCheckFocus = () => {
    if (divRef.current === document.activeElement) {
      console.log("El div está enfocado");
    } else {
      console.log("El div no está enfocado");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        console.log("Enter presionado mientras el div está enfocado");
      }
    };

    const divElement = divRef.current;

    // Verificar si el div está enfocado antes de añadir el event listener
    if (divElement) {
      divElement.addEventListener("keydown", handleKeyDown);
    }

    // Remover el event listener al desmontar el componente
    return () => {
      if (divElement) {
        divElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [divRef]);
  return (
    <div ref={divRef} tabIndex="0" className="Serie" onClick={handleCheckFocus}>
      <div className="img">
        <img
          src="https://i.pinimg.com/236x/f9/6a/6c/f96a6c5926bcf01ae4f83fdd3c71042c.jpg"
          alt=""
        />
      </div>
      <div className="titulo">EXAMPLE CORP 2021</div>
    </div>
  );
}

function Categoria() {
  const linkRef = useRef(null);

  const handleCheckFocus = () => {
    if (linkRef.current === document.activeElement) {
      console.log("El Link está enfocado");
    } else {
      console.log("El Link no está enfocado");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        console.log("Enter presionado mientras el Link está enfocado");
      }
    };

    const divElement = linkRef.current;

    // Verificar si el div está enfocado antes de añadir el event listener
    if (divElement) {
      divElement.addEventListener("keydown", handleKeyDown);
    }

    // Remover el event listener al desmontar el componente
    return () => {
      if (divElement) {
        divElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [linkRef]);
  return (
    <div>
      <li>
        <a ref={linkRef} className="Serie" onClick={handleCheckFocus} href="#">
          example 1
        </a>
      </li>
    </div>
  );
}

const Grid = () => {
  const [selectedBox, setSelectedBox] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setSelectedBox((prev) => (prev - 2 >= 0 ? prev - 2 : prev));
          break;
        case "ArrowDown":
          setSelectedBox((prev) => (prev + 2 < 4 ? prev + 2 : prev));
          break;
        case "ArrowLeft":
          setSelectedBox((prev) => (prev % 2 !== 0 ? prev - 1 : prev));
          break;
        case "ArrowRight":
          setSelectedBox((prev) => (prev % 2 !== 1 ? prev + 1 : prev));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  return (
    <div className="grid">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={`box ${selectedBox === index ? "selected" : ""}`}
          onClick={() => handleBoxClick(index)}
          tabIndex={0}
          onFocus={() => setSelectedBox(index)}
        >
          Box {index + 1}
        </div>
      ))}
    </div>
  );
};
