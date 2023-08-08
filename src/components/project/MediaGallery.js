const styles = {
    projectGalleryImage: {
        marginBottom: '1em',
        width: '100%'
    }
}

export default function MediaGallery({projectGallery}) {
    return (
        <div style={{marginBottom: "-1em"}}> {/* Counteract last image margin */}
            {projectGallery && projectGallery.map((image, index) =>
                <img key={index} src={image} alt={`Bild ${index}`}
                     style={styles.projectGalleryImage}
                     onError={(e) => e.target.style.display = 'none'}/>)}
        </div>
    );


}