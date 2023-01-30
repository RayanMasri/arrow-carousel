import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import useDiscloser from "../hooks/useDiscloser"
import { HawaMenu } from "../elements"
import { HiMenu } from "react-icons/hi"
import useBreakpoint from "../hooks/useBreakpoint"
import { FaChevronRight } from "react-icons/fa"
type HawaAppLayoutTypes = {
  drawerItems: {
    label: string
    icon: any
    slug: string
    action: () => void
    subItems?: any
  }[][]
  direction?: "rtl" | "ltr"
  currentPage: string
  pageTitle?: string
  logoSymbol?: any
  logoLink?: string
  logoText?: any
  children?: any
  topBar?: boolean
  profileMenuItems?: MenuItems[][]
}
type MenuItems = {
  icon?: JSX.Element
  label: string
  action?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: string
  ) => void
  isButton?: boolean
}


export const HawaAppLayout: React.FunctionComponent<HawaAppLayoutTypes> = ({
  direction = "rtl",
  ...props
}) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [openSubItem, setOpenSubItem] = useState(false)
  const { isOpen, onClose, onOpen } = useDiscloser(false)
  const ref = useRef(null)
  const drawerItemRef = useRef(null)

  let size
  if (typeof window !== "undefined") {
    size = useBreakpoint()
  } else {
    size = 1200
  }
  const [keepOpen, setKeepOpen] = useState(false)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && !keepOpen) {
        // onClickOutside && onClickOutside()

        setOpenSideMenu(false)
      }
    }
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [keepOpen])

  //States of the side menu
  //larger than 600
  //as a bar and expands when hover
  //less than 600
  //as nothing and expands as button is clicked
  let ltrDrawerStyle = [
    " fixed top-0 left-0 z-40 flex h-full flex-col justify-between overflow-x-clip bg-layoutPrimary-500 transition-all",
    size > 600 ? "w-14 hover:w-40" : "w-0",
    openSideMenu ? "w-40" : "w-14",
  ]
  let rtlDrawerStyle = [
    "fixed top-0 right-0 z-40 flex h-full flex-col justify-between overflow-x-clip bg-layoutPrimary-500 transition-all",
    size > 600 ? "w-14 hover:w-40" : "w-0",
    openSideMenu ? "w-40" : "w-14",
  ]

  let ltrChildrenStyle = [
    "fixed  overflow-y-auto",
    size > 600 ? "left-14 w-[calc(100%-3.5rem)]" : "left-0 ",
    props.topBar ? "top-14 h-[calc(100%-3.5rem)]" : "top-0 h-full",
    keepOpen ? "left-40 w-[calc(100%-10rem)]" : "",
    keepOpen && size > 600 ? "left-0 w-[calc(100%-10.01rem)]" : "",
  ]
  let rtlChildrenStyle = [
    "fixed overflow-y-auto",
    size > 600 ? "right-14 w-[calc(100%-3.5rem)]" : "right-0 ",
    props.topBar ? "top-14 h-[calc(100%-3.5rem)]" : "top-0 h-full",
    keepOpen ? "right-40 w-[calc(100%-10rem)]" : "",
    keepOpen && size > 600 ? "right-0 w-[calc(100%-10.01rem)]" : "",
  ]
  return (
    <div className="fixed left-0 h-full">
      {props.topBar && (
        <div
          className={clsx(
            "fixed top-0 z-30 flex h-14 flex-row items-center justify-between bg-layoutPrimary-500",
            // size > 600 ? "w-[calc(100%-3rem)] translate-x-[3rem]" : "w-full",
            "w-full",
            "p-2",
            direction === "rtl" ? "flex-row-reverse" : ""
            // "pr-5"
          )}
        >
          {size > 600 ? (
            props.pageTitle ? (
              <div
                className={clsx(
                  direction === "rtl"
                    ? [size > 600 ? "mr-14" : "mr-2", keepOpen ? "mr-40" : ""]
                    : [size > 600 ? "ml-14" : "ml-2", keepOpen ? "ml-40" : ""]
                )}
              >
                {props.pageTitle}
              </div>
            ) : null
          ) : (
            <div className="flex items-center justify-center">
              <div
                onClick={() => setOpenSideMenu(true)}
                className=" mr-2 cursor-pointer rounded p-2  transition-all hover:bg-gray-100"
              >
                <HiMenu size={25} />
              </div>
              {props.pageTitle ? <div>{props.pageTitle}</div> : <div></div>}
            </div>
          )}

          <HawaMenu
            buttonPosition={direction === "rtl" ? "top-left" : "top-right"}
            menuItems={props.profileMenuItems}
            handleClose={onClose}
            handleOpen={onOpen}
            open={isOpen}
          >
            <div className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
              <svg
                className="absolute -left-1 h-10 w-10 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </HawaMenu>
        </div>
      )}
      <div
        onMouseEnter={() => {
          setOpenSideMenu(true)
        }}
        onMouseLeave={() => {
          if (keepOpen) {
            setOpenSideMenu(true)
          } else {
            setOpenSideMenu(false)
          }
        }}
        ref={ref}
        className={clsx(direction === "rtl" ? rtlDrawerStyle : ltrDrawerStyle)}
      >
        <div
          className={clsx(
            props.topBar ? "" : "mt-2",
            openSideMenu ? "overflow-auto" : "overflow-hidden"
          )}
        >
          <div
            className={clsx(
              "fixed z-50 mb-2 flex h-12 items-center justify-center bg-layoutPrimary-500 p-2 transition-all",
              openSideMenu ? "w-40" : "w-14"
            )}
          >
            <img
              className={clsx(
                "fixed top-2.5 h-9 transition-all",
                direction === "rtl" ? "right-2.5" : "left-2.5",
                !openSideMenu ? "invisible opacity-0" : "visible opacity-100"
              )}
              src={props.logoLink}
              // src={"https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75"}
            />

            {size > 600 ? (
              <img
                className={clsx(
                  // " bg-green-500",
                  "fixed top-2.5 h-9 transition-all",
                  direction === "rtl" ? "right-2.5" : "left-2.5",
                  openSideMenu ? "invisible opacity-0" : "visible opacity-100"
                )}
                src={props.logoSymbol}
                // src="https://beta-admin.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=128&q=75"
              />
            ) : null}
          </div>

          <div className="mt-12 mb-8">
            {props.drawerItems.map((dSection, j) => (
              <div
                key={j}
                className={clsx("flex flex-col items-stretch justify-center")}
              >
                {dSection.map((dItem, i) => {
                  return (
                    <div key={i} id={"test"} className="flex flex-col">
                      <div
                        ref={
                          props.currentPage === dItem.slug
                            ? drawerItemRef
                            : null
                        }
                        onClick={() => {
                          ref.current.scrollTop =
                            drawerItemRef.current?.offsetTop - 100
                          dItem.action()
                        }}
                        className={clsx(
                          props.currentPage === dItem.slug
                            ? "bg-buttonPrimary-500 text-white"
                            : "hover:bg-buttonPrimary-300",
                          "m-2 flex cursor-pointer flex-row items-center overflow-x-clip rounded p-2  pl-3 transition-all ",
                          direction === "rtl" ? "flex-row-reverse pr-3" : ""
                        )}
                      >
                        <div className="flex items-center justify-center">
                          {dItem.icon}
                        </div>
                        <div
                          className={clsx(
                            "mx-2 whitespace-nowrap text-sm transition-all",
                            openSideMenu ? "opacity-100" : "opacity-0"
                          )}
                        >
                          {dItem.label}
                        </div>
                      </div>
                      {/* {dItem.subItems && (openSideMenu || isOpen) ? ( */}
                      {dItem.subItems ? (
                        <div
                          className={clsx(
                            "flex flex-col gap-2",
                            direction === "rtl" ? "text-right" : "text-left"
                          )}
                        >
                          {dItem.subItems.map((subIt) => (
                            <div className="p-2 px-4">subItems</div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
                {j !== props.drawerItems.length - 1 && (
                  <div className="my-2 h-[1px] w-10/12 self-center bg-buttonPrimary-500 text-center "></div>
                )}{" "}
              </div>
            ))}
          </div>
        </div>
        <div
          dir={direction}
          className={clsx(
            "fixed bottom-2 flex w-fit items-center",
            direction === "rtl"
              ? "right-32 justify-start"
              : "left-32 justify-start",
            "transition-all duration-700",
            openSideMenu && size > 600 ? " opacity-100" : " opacity-0"
          )}
        >
          {openSideMenu && size > 600 ? (
            <div
              onClick={() => setKeepOpen(!keepOpen)}
              className={clsx(
                keepOpen ? "rotate-180" : "",
                direction === "rtl" ? "rotate-180" : "",
                "w-fit cursor-pointer rounded bg-gray-300 p-1 transition-all"
              )}
            >
              <FaChevronRight />
            </div>
          ) : null}
          {/* {keepOpen && (
            <div
              onClick={() => setKeepOpen(false)}
              className={clsx(
                openSideMenu ? "visible" : "invisible",
                direction === "rtl" ? "rotate-180" : "",
                "w-fit cursor-pointer rounded bg-gray-300 p-1 transition-all"
              )}
            >
              <FaChevronLeft />
            </div>
          )} */}
        </div>
      </div>

      <div
        className={clsx(
          direction === "rtl" ? rtlChildrenStyle : ltrChildrenStyle
        )}
      >
        {props.children}
      </div>
    </div>
  )
}
