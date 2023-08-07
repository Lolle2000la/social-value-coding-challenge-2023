const styles = {
    projectGalleryImage: {
        marginBottom: '1em',
        width: '100%'
    }
}

export default function MediaGalery({projectGallery}) {
    return (
        <div>
            {projectGallery && projectGallery.map((image, index) =>
                <img key={index} src={image} alt={`Bild ${index}`}
                     style={styles.projectGalleryImage}
                     onError={(e) => e.target.style.display = 'none'}/>)}
        </div>
    );


}