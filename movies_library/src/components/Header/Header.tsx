import { useState } from "react";
import style from "./header.module.css";
import sacola from "/assets/imgs/sacola.svg";
import perfil from "/assets/imgs/perfil.svg";
import hamburguerMenu from "/assets/imgs/hamburger-menu.svg";
import { ConfigProvider, Menu, MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const headerOptions = [
    {
      key: "1",
      label: "CATEGORIAS",
    },
    { key: "2", label: "ESTANTES" },
    { key: "3", label: "FAVORITOS" },
  ];
  const icones = [sacola, perfil];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigate = useNavigate();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const selectedRoute = headerOptions
      .find((item) => item.key === e.key)
      ?.label.toLowerCase();

    if (selectedRoute) {
      navigate(`/${selectedRoute}`);
      setMenuVisible(false);
    }
  };

  return (
    <header className={style.header}>
      <button
        onClick={toggleMenu}
        className={style.menu_hamburguer}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <img
          src={hamburguerMenu}
          className={style.menu_hamburguer}
          alt="Menu"
        />
      </button>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemActiveBg: "#1c274c",
              itemSelectedBg: "#1c274c",
              itemSelectedColor: "white",
              itemHoverBg: "#6fa7eb;",
              itemHoverColor: "white",
              fontSize: 20,
            },
          },
        }}
      >
        {menuVisible && (
          <Menu
            rootClassName={style.menu}
            items={headerOptions}
            onClick={handleMenuClick}
            style={{
              position: "absolute",
              top: "82px",
              left: "-1px",
              width: "256px",
              padding: "16px",
            }}
          />
        )}
      </ConfigProvider>
      <Link to="/" className={style.noStyle}>
        <div className={style.divHeader}>
          <img
            className={style.logo}
            src="assets/imgs/video-library.svg"
            alt="Logo"
          />
          <p className={style.pTypographyHeader}>
            Movies<strong>Library</strong>
          </p>
        </div>
      </Link>
      <ul className={style.linksHeader}>
        {headerOptions.map((option, index) => (
          <li key={index}>
            <Link
              to={`/${option.label.toLowerCase()}`}
              className={style.noStyle}
            >
              <p className={style.headerOption}>{option.label}</p>
            </Link>
          </li>
        ))}
      </ul>
      <ul className={style.iconesHeader}>
        {icones.map((icone, index) => (
          <li key={index} className={style.icone}>
            <img src={icone} alt="Ícone" />
          </li>
        ))}
      </ul>
    </header>
  );
};
