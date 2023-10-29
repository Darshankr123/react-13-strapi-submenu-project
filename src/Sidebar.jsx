import React from "react";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {sublinks.map((item) => {
            // console.log(item);
            const { pageId, page, links } = item;
            return (
              <article key={pageId} className="pages">
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((item) => {
                    const { id, icon, label, url } = item;
                    return (
                      <a key={id} href={url} className="page">
                        <span>{icon}</span>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
