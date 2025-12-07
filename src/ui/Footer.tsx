import { Tooltip } from "../components/Tooltip"

type LinkConfig = {
    key: string;
    link: string;
    tooltip: string;
    text: string;
}

type LinksConfig = {
    [key: string]: LinkConfig;
};

const LINKS_CONFIG: LinksConfig = {
    perfil: {
        key: 'profile-link',
        link: 'https://github.com/Sathaniel99',
        tooltip: 'Enlace al perfil de Github.',
        text: 'Adán Luis Quincoces Escalona',
    },
    proyecto: {
        key: 'project-link',
        link: 'https://sathaniel99.github.io/fields-yugioh/',
        tooltip: 'Enlace al primer proyecto.',
        text: 'Proyecto propio.',
    },
}

export function Footer() {
    const classLink = `
    border-1 border-neutral-600/50
    bg-neutral-900 hover:bg-neutral-800 active:bg-white/5
    px-2 py-1 mx-1 rounded-md transition-all
    !text-neutral-50 hover:!text-blue-500 font-bold font-fredericka-the-great`;

    return (
        <footer className="border-t-2 py-6 mt-auto border-gray-500/50 bg-card">
            <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
                <p className="">Yu-Gi-Oh! es propiedad de Konami. Este proyecto es solo educativo.</p>
                <p className="mt-1">
                    Creado por
                    <Tooltip key={LINKS_CONFIG.perfil.key} text={LINKS_CONFIG.perfil.tooltip}>
                        <a className={classLink} href={LINKS_CONFIG.perfil.link} target="_blank" rel="noopener noreferrer">
                            {LINKS_CONFIG.perfil.text}
                        </a>
                    </Tooltip>
                    , versionando otro
                    <Tooltip key={LINKS_CONFIG.proyecto.key} text={LINKS_CONFIG.proyecto.tooltip}>
                        <a className={classLink} href={LINKS_CONFIG.perfil.link} target="_blank" rel="noopener noreferrer">
                            {LINKS_CONFIG.proyecto.text}
                        </a>
                    </Tooltip>
                </p>
            </div>
        </footer>
    )
}