


interface NavbarInter {
    name: string,
    icon: React.ReactElement,
    type: string,
}



const NavbarUtils: NavbarInter[] = [
    { name: "New", icon: <HomeIcon />, type: "home" },
    { name: "Trending", icon: <FireIcon />, type: "category" },
    { name: "Music", icon: <MusicalNoteIcon />, type: "category" },
    { name: "Films", icon: <FilmIcon />, type: "category" },
    { name: "Live", icon: <TvIcon />, type: "category" },
    { name: "Gaming", icon: <gamep />, type: "category" },
]