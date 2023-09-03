import styles from './ProjectTile.module.scss';

const ProjectTile = (props) => {
    return (
        <div className={styles.tile}>
            <h3>{props.title}</h3>
            <p>{props.role}</p>
            <p>{props.type}</p>
        </div>
    );
};

export default ProjectTile;