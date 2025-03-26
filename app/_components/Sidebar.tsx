"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/app/_hooks/useSidebar";
import { ROUTE_CONST } from "@/app/_constants/routeConstants";
import { useProfile } from "../_hooks/useProfile";

interface MenuItemType {
  id: string;
  title: string;
  icon: string;
  type: "link" | "button" | "dropdown"; // Add other possible types if needed
  url: string;
}


const Sidebar = () => {
  const pathname = usePathname();
  const { showSidebar, setShowSidebar } = useSidebar();
  const {userData, handleSignOut} = useProfile();

  const bottomMenuList : MenuItemType[] = [
    {
      id: "bottomMenu1",
      title: "Support",
      icon: "/img/settingIcon.png",
      type: "link",
      url: ROUTE_CONST.HOME,
    },
  ];

  const adminMenuItems = [
    {
      id: "adminmenu1",
      title: "Users",
      icon: "/img/subscriptionIcon.png",
      type: "link",
      url: '/admin/users',
    },
    {
      id: "adminmenu2",
      title: "Plans",
      icon: "/img/subscriptionIcon.png",
      type: "link",
      url: '/admin/plans',
    },
  ]

  const menuItems : MenuItemType[] = [
      {
        id: "menu1",
        title: "Tracking",
        icon: "/img/trackingIcon.png",
        type: "link",
        url: ROUTE_CONST.DASHBOARD,
      },
      {
        id: "menu2",
        title: "Subscription & Usage",
        icon: "/img/subscriptionIcon.png",
        type: "link",
        // url: ROUTE_CONST.HOME,
        url: '/test'
      },
      {
        id: "menu3",
        title: "Documentation",
        icon: "/img/documentIcon.png",
        type: "link",
        // url: ROUTE_CONST.HOME,
        url: '/test'
      },
    ];

  return (
    <>
      <div
        className={`sidebar w-[17.5rem] bg-white h-full overflow-hidden flex flex-col max-lg:h-dvh max-lg:fixed max-lg:z-20 transition-all duration-300 ease-in-out max-lg:top-0 max-lg:left-0 border-r border-theme6 ${
          showSidebar ? "" : "max-lg:-translate-x-full"
        }`}
      >
        <div className="sidebarHeader p-6">
          <Link className="mb-6 flex" href={ROUTE_CONST.HOME}>
            <Image
              width={142}
              height={32}
              loading="lazy"
              quality={90}
              alt="logo"
              src={"/img/logo.png"}
              className="w-36 h-8"
            ></Image>
          </Link>
          <div className="relative">
            <Image width={15} height={15} src={"/img/searchIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain absolute top-1/2 left-4 -translate-y-1/2" alt="search icon"/>
            <input 
              // value={searchQuery} 
              // onChange={(e)=> setSearchQuery(e.target.value)}
              type="text" 
              className='text-base w-full h-11 rounded-lg border border-theme8 pl-10 placeholder:text-theme13 placeholder:font-normal ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50' 
              placeholder='Search' 
            />
          </div>
        </div>
        <div className="sidebarContent h-full flex-1 overflow-y-auto px-4 flex flex-col">
          <ul className="m-0 p-0 list-none flex-1">
            {userData?.user?.role === "ADMIN" && adminMenuItems?.length ? (
              adminMenuItems?.map((item, index) => (
                <li key={item.id || index}>
                    <Link
                      href={item?.url}
                      className={`flex text-base items-center h-10 mb-1 !no-underline rounded-lg gap-2.5 font-semibold text-theme5 p-4 group hover:text-theme1 hover:bg-theme4 [&.active]:bg-theme4 [&.active]:text-theme1 ${
                        pathname?.includes(item?.url) ? "active" : ""
                      }`}
                    >
                      <Image
                        className="size-[1.125rem] brightness-[0.25] group-hover:brightness-100 group-[.active]:brightness-100"
                        width={18}
                        height={18}
                        loading="lazy"
                        quality={90}
                        alt={`${item?.title} icon`}
                        src={item?.icon}
                      />
                      {item?.title}
                    </Link>
                </li>
              ))
            ) : null}
            {menuItems?.length ? (
              menuItems?.map((item, index) => (
                <li key={item.id || index}>
                    <Link
                      href={item?.url}
                      className={`flex text-base items-center h-10 mb-1 !no-underline rounded-lg gap-2.5 font-semibold text-theme5 p-4 group hover:text-theme1 hover:bg-theme4 [&.active]:bg-theme4 [&.active]:text-theme1 ${
                        pathname?.includes(item?.url) ? "active" : ""
                      }`}
                    >
                      <Image
                        className="size-[1.125rem] brightness-[0.25] group-hover:brightness-100 group-[.active]:brightness-100"
                        width={18}
                        height={18}
                        loading="lazy"
                        quality={90}
                        alt={`${item?.title} icon`}
                        src={item?.icon}
                      />
                      {item?.title}
                    </Link>
                </li>
              ))
            ) : null}
          </ul>
          <ul className="m-0 p-0 pb-2 list-none">
            {bottomMenuList?.length ? (
              bottomMenuList?.map((item) => (
                <li key={item?.url}>
                  <Link
                    href={item?.url}
                    style={{ textDecoration: "none" }}
                    className={`flex text-base items-center h-10 mb-1 rounded-lg gap-2.5 font-semibold text-theme5 p-4 group hover:text-theme1 hover:bg-theme4 [&.active]:bg-theme4 [&.active]:text-theme1 ${
                      pathname === item?.url ? "active" : ""
                    }`}
                  >
                    <Image
                      className="size-[1.125rem] brightness-[0.25] group-hover:brightness-100 group-[.active]:brightness-100"
                      width={18}
                      height={18}
                      loading="lazy"
                      quality={90}
                      alt={`${item?.title} icon`}
                      src={item?.icon}
                    ></Image>
                    {item?.title}
                  </Link>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
          <div className="flex items-center gap-3 pb-8 border-t border-theme6 pt-6">
            <div className="size-10 rounded-full overflow-hidden">
              <Image className="size-10" width={40} height={40} src={"/img/avatar.png"} alt="user"/>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm font-semibold text-theme5">
                {userData?.user?.name ? userData?.user?.name : ''}
                <Image onClick={handleSignOut} className="cursor-pointer ml-auto size-5" width={15} height={15} src={"/img/logoutIcon.png"} alt="user"/>
              </div>
              <div className="text-theme9 text-xs font-normal">{userData?.user?.email ? userData?.user?.email : ''}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed bg-black/25 top-0 left-0 h-dvh w-full z-10 ${
          showSidebar ? "" : "hidden"
        } lg:hidden`}
      ></div>
    </>
  );
};

export default Sidebar;