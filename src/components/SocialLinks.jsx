import { GithubLogo, LinkedinLogo, EnvelopeSimple, User } from 'phosphor-react'

export function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkdIn <LinkedinLogo size={30} weight="bold" color="#3fafde" />
                </>
            ),
            href: 'https://www.linkedin.com/in/leandro-nunes-668b41160/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <GithubLogo size={30} />
                </>
            ),
            href: 'https://github.com/leonunesdev',
        },
        {
            id: 3,
            child: (
                <>
                    Email <EnvelopeSimple size={30} />
                </>
            ),
            href: 'mailto:leandronunesdev@outlook.com',
        },
        {
            id: 4,
            child: (
                <>
                    CV <User size={30} />
                </>
            ),
            href: '/resumo.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ];
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gray-500" +
                            "" +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}