<?php

namespace Drupal\om_cookies_styles\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for om_cookies_styles routes.
 */
class OmCookiesStylesController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
