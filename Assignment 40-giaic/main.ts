function make_album(artist_name:string, album_title:string, tracks?:number){
    let album: {artist: string, title:string, tracks?:number} = {
        artist: artist_name,
        title: album_title,
    };
    if(tracks !== undefined){
        album.tracks = tracks
    }
    return album; 
}
let album1 = make_album("Umer", "Faasley");
let album2 = make_album("Ali", "Humnava");
let album3 = make_album("Atif", "Sangemaah", 3);
console.log(album1);
console.log(album2);
console.log(album3);