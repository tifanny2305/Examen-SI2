import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdministradorComponent } from './admin/administrador/administrador.component';
import { MaestroComponent } from './admin/maestro/maestro.component';
import { MateriaComponent } from './admin/materia/materia.component';
import { ModuloComponent } from './admin/modulo/modulo.component';
import { AsistenciaComponent } from './admin/asistencia/asistencia.component';
import { AulaComponent } from './admin/aula/aula.component';
import { CargahorariaComponent } from './admin/cargahoraria/cargahoraria.component';
import { GestionComponent } from './admin/gestion/gestion.component';
import { GrupoComponent } from './admin/grupo/grupo.component';
import { LicenciaComponent } from './admin/licencia/licencia.component';
import { NivelComponent } from './admin/nivel/nivel.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { CarreraComponent } from './admin/carrera/carrera.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: '',
        component:LayoutComponent,
        children:[
            {
                path: 'dashboard',
                title: 'Dashboard',
                component: DashboardComponent,
                /* data: { icon: 'fa-solid fa-gauge' } */
              },
              {
                path: 'usuario',
                title: 'usuario',
                component: UsuarioComponent,
                /* data: { icon: 'fa-solid fa-user' } */
              },
              {
                path: 'administrador',
                title: 'Administrador',
                component: AdministradorComponent,
                data: { icon: 'fa-solid fa-user' }
              },
              {
                path: 'maestro',
                title: 'Maestro',
                component: MaestroComponent,
                data: { icon: 'fa-solid fa-chalkboard-teacher' }
              },
              {
                path: 'materia',
                title: 'Materia',
                component: MateriaComponent,
                data: { icon: 'fa-solid fa-book' }
              },
              {
                path: 'modulo',
                title: 'Modulo',
                component: ModuloComponent,
                data: { icon: 'fa-solid fa-cubes' }
              },
              {
                path: 'asistencia',
                title: 'Asistencia',
                component: AsistenciaComponent,
                data: { icon: 'fa-solid fa-calendar-check' }
              },
              {
                path: 'aula',
                title: 'Aula',
                component: AulaComponent,
                data: { icon: 'fa-solid fa-door-open' }
              },
              {
                path: 'carga-horaria',
                title: 'Carga Horaria',
                component: CargahorariaComponent,
                data: { icon: 'fa-solid fa-clock' }
              },
              {
                path: 'gestion',
                title: 'Gestion',
                component: GestionComponent,
                data: { icon: 'fa-solid fa-calendar-alt' }
              },
              {
                path: 'grupo',
                title: 'Grupo',
                component: GrupoComponent,
                data: { icon: 'fa-solid fa-users' }
              },
              {
                path: 'licencia',
                title: 'Licencia',
                component: LicenciaComponent,
                data: { icon: 'fa-solid fa-id-card' }
              },
              {
                path: 'nivel',
                title: 'Nivel',
                component: NivelComponent,
                data: { icon: 'fa-solid fa-layer-group' }
              },
              {
                path: 'carrera',
                title: 'carrera',
                component: CarreraComponent,
                /* data: { icon: 'fa-solid fa-layer-group' } */
              },
        ]
    },
];
