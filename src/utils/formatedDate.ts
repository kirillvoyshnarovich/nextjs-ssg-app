export default function formatedDate(date: Date ): string | null {
  let hh: any = date.getUTCHours();
  let mm: any = date.getUTCMinutes();

  if (hh < 10) {hh = "0"+hh;}
  if (mm < 10) {mm = "0"+mm;}

  if(!date) return null;
  return (hh + ":" + mm);
}