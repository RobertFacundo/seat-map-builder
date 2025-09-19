import styles from '@/app/page.module.css';
import buttonStyles from '@/styles/Buttons.module.css';
import { useRef } from 'react';

interface HeaderProps {
    onExport: () => void;
    onImport: (file: File) => void;
}

const Header = ({ onExport, onImport }: HeaderProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onImport(file);
        }
    }
    return (
        <div className={styles.headerContainer}>
            <button
                onClick={handleImportClick}
                className={`${buttonStyles['btn-base']} ${buttonStyles['btn-primary-grad']}`}
            >
                Importar Mapa
            </button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept='.json' />
            <h1>Seat Map Builder</h1>
            <button
                onClick={onExport}
                className={`${buttonStyles['btn-base']} ${buttonStyles['btn-primary-grad']}`}
            >
                Exportar mapa
            </button>
        </div>
    )
}

export default Header;