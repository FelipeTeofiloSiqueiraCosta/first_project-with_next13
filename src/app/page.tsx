//se for um server-component e eu querer que a pagina inteira seja revalidada depois de
// 30 sec é só eu fazer:

import Link from "next/link";

import { User } from "./components/User";

//export const revalidate = 30;

//porém se eu querer só revalidar a chamada a api, e não o componente todo, é só eu fazer
// oque eu fiz no fetch

//tem uma outra opão ali  no fetch, que é a
// cache, que tem as seguintes opções:
// force-cache => forçar que tal requisição seja cacheada, aramazeno de maneira global, sendo assim, todos os usuários
//                  compartilham aquele cache.
// no store => não quero armazenar isso em cache de maneira global para todos os usuários

export const metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <div>
      Home
      {/* TS nao tem suporte pra entender que componente pode ser assincrono */}
      <Link href="/users" prefetch={false}>
        dash
      </Link>
      <br />
      <Link href="/users" prefetch={false}>
        users
      </Link>
    </div>
  );
}
