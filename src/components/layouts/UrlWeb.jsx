
export function UrlWeb({route}) {
    const {id,link,name,state} = route
    return (
        <li><a href={link} className="px-3 py-2">{name}</a></li>
        );
  }
  