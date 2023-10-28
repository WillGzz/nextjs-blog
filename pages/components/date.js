import { parseISO, format } from 'date-fns';


export default function Date({ dateString }) {
  try {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  } catch (error) {
    console.error('Error parsing date:', dateString, error);
    return <time>Error parsing date</time>;
  }
}
