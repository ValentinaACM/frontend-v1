// Nombre del archivo: script.js

document.getElementById('abrirModalBtn').addEventListener('click', function () {
    var confirmacionModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));

    document.getElementById('confirmarCambioEstado').addEventListener('click', function () {
        var switchCheckbox = document.getElementById('flexSwitchCheckDefault');
        switchCheckbox.checked = !switchCheckbox.checked;

        confirmacionModal.hide();
    });

    confirmacionModal.show();
});

document.getElementById('flexSwitchCheckDefault').addEventListener('click', function () {
    document.getElementById('abrirModalBtn').click();
});

const data = [
    {
        category: 'Configuración',
        submodules: [
            { name: 'Roles', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestion de usuarios', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] }
        ]
    },
    {
        category: 'Compras',
        submodules: [
            { name: 'Categoria De Insumos', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestión De Insumos', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestión De Proveedores', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestión De Compras', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] }
        ]
    },
    {
        category: 'Producción',
        submodules: [
            { name: 'Gestión De Empleados', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestión De Ficha Tecnica', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestión De Orden De Producción', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] }
        ]
    },
    {
        category: 'Productos',
        submodules: [
            { name: 'Estampados', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Catalogo De Productos', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Producto Base', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Producto Personalizado', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] }
        ]
    },
    {
        category: 'Pedidos',
        submodules: [
            { name: 'Gestión De Cotización', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestión Carrito De Productos', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestión De Pedidos', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] }
        ]
    },
    {
        category: 'Ventas',
        submodules: [
            { name: 'Gestión De Clientes', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] },
            { name: 'Gestión De Ventas', permissions: ['Listar', 'Crear', 'Editar', 'Eliminar'] }
        ]
    },
];

function generatePermissionsList(data) {
    const listContainer = document.getElementById('permissionsList');
    let openElement = null;

    data.forEach(categoryData => {
        const categoryRow = document.createElement('div');
        categoryRow.className = 'row';

        const categoryListItem = document.createElement('li');
        categoryListItem.className = 'd-inline-block dropdown col-md-12';

        const categoryLink = document.createElement('a');
        categoryLink.className = 'dropdown-toggle permission-link';
        categoryLink.setAttribute('data-bs-toggle', 'collapse');
        categoryLink.href = `#${categoryData.category.replace(/\s+/g, '')}Permissions`;
        categoryLink.setAttribute('role', 'button');
        categoryLink.innerText = categoryData.category;

        const categoryCollapseDiv = document.createElement('div');
        categoryCollapseDiv.className = 'collapse';
        categoryCollapseDiv.id = `${categoryData.category.replace(/\s+/g, '')}Permissions`;

        const categorySubmodulesList = document.createElement('ul');
        categorySubmodulesList.className = 'list-unstyled dropdown-submodules';

        categoryData.submodules.forEach(submoduleData => {
            const submoduleItem = document.createElement('li');

            const submoduleDropdown = document.createElement('div');
            submoduleDropdown.className = 'dropdown';

            const submoduleLink = document.createElement('a');
            submoduleLink.className = 'dropdown-toggle permission-link';
            submoduleLink.setAttribute('data-bs-toggle', 'collapse');
            submoduleLink.href = `#${submoduleData.name.replace(/\s+/g, '')}Permissions`;
            submoduleLink.setAttribute('role', 'button');
            submoduleLink.innerText = submoduleData.name;

            const submoduleCollapseDiv = document.createElement('div');
            submoduleCollapseDiv.className = 'collapse';
            submoduleCollapseDiv.id = `${submoduleData.name.replace(/\s+/g, '')}Permissions`;

            const submodulePermissionsList = document.createElement('ul');
            submodulePermissionsList.className = 'list-inline';

            submoduleData.permissions.forEach(permission => {
                const permissionItem = document.createElement('li');
                permissionItem.className = 'list-inline-item';

                const permissionCheckbox = document.createElement('div');
                permissionCheckbox.className = 'form-check';

                const permissionInput = document.createElement('input');
                permissionInput.className = 'form-check-input';
                permissionInput.type = 'checkbox';
                permissionInput.value = permission;

                const permissionLabel = document.createElement('label');
                permissionLabel.className = 'form-check-label';
                permissionLabel.innerText = permission;

                permissionCheckbox.appendChild(permissionInput);
                permissionCheckbox.appendChild(permissionLabel);
                permissionItem.appendChild(permissionCheckbox);

                submodulePermissionsList.appendChild(permissionItem);
            });

            submoduleCollapseDiv.appendChild(submodulePermissionsList);
            submoduleDropdown.appendChild(submoduleLink);
            submoduleDropdown.appendChild(submoduleCollapseDiv);

            submoduleItem.appendChild(submoduleDropdown);
            categorySubmodulesList.appendChild(submoduleItem);
        });

        categoryCollapseDiv.appendChild(categorySubmodulesList);
        categoryListItem.appendChild(categoryLink);
        categoryListItem.appendChild(categoryCollapseDiv);

        categoryRow.appendChild(categoryListItem);
        listContainer.appendChild(categoryRow);

        categoryLink.addEventListener('click', () => {
            if (openElement && openElement !== categoryCollapseDiv) {
                openElement.classList.remove('show');
            }
            openElement = categoryCollapseDiv;
        });
    });
}

generatePermissionsList(data);

