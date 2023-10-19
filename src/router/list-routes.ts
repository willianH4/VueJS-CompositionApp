export interface RouterLink {
    name: string;
    path: string;
    title: string;
    visible: boolean;
}

export const routerLinks: RouterLink[] = [
    { path: '/', name: 'home', title: 'Home', visible: true },
    { path: '/about', name: 'about', title: 'About', visible: true },
    { path: '/counter', name: 'counter', title: 'Counter', visible: true },
    { path: '/pokemons', name: 'pokemons', title: 'Pokemons', visible: true },
    { path: '/counter-1', name: 'counter-1', title: 'Counter-1', visible: true },
    { path: '/counter-2', name: 'counter-2', title: 'Counter-2', visible: true },
    { path: '/clients', name: 'clients', title: 'Clientes', visible: true },
];