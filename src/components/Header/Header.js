import * as React from "react";
import { Link } from "gatsby";

import Constraint from "../Constraint";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Constraint className="Header__content">
        <Link to="/">
          <h1>SuUkraina.lt</h1>
        </Link>
        <input type="checkbox" name="menu-sensor" id="menu-sensor" />
        <label className="Header__menu-trigger" htmlFor="menu-sensor">
          ☰
        </label>
        <nav className="Header__nav" aria-label="Pagrindinė navigacija">
          <ul className="Header__menu">
            <li>
              <Link aria-haspopup="true" to="/kaip-galiu-padeti/">
                Kaip galiu padėti?
              </Link>
              <ul>
                <li>
                  <Link to="/kaip-galiu-padeti/aukojimas/">Aukojimas</Link>
                </li>
                <li>
                  <Link to="/kaip-galiu-padeti/savanoryste/">Savanorystė</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link aria-haspopup="true" to="/protesto-formos/">
                Protesto formos
              </Link>
              <ul>
                <li>
                  <Link to="/protesto-formos/akcijos/">Akcijos</Link>
                </li>
                <li>
                  <Link to="/protesto-formos/renginiai/">Renginiai</Link>
                </li>
                <li>
                  <Link to="/protesto-formos/laisku-rasymas/">
                    Laiškų rašymas
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link aria-haspopup="true" to="/bukime-budrus/">
                Būkime budrūs
              </Link>
              <ul>
                <li>
                  <Link to="/bukime-budrus/piliecio-atmintine/">
                    Piliečio atmintinė
                  </Link>
                </li>
                <li>
                  <Link to="/bukime-budrus/patikima-informacija/">
                    Patikima informacija
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Constraint>
    </div>
  );
};

export default Header;
