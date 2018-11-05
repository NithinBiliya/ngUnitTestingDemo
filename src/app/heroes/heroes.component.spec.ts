import { HeroesComponent } from './heroes.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// tslint:disable-next-line:import-blacklist
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES: Array<Hero>;
  let mockHeroService: any;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 }
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('should remove the indicated hero from the hero list when delete is called', () => {
      component.heroes = HEROES;
      mockHeroService.deleteHero.and.returnValue(of(true));

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    });

    it('should call deleteHero with correct hero on hero service when delete is called', () => {
      component.heroes = HEROES;
      mockHeroService.deleteHero.and.returnValue(of(true));

      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
